from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password

from .models import UserModel
from Address.models import AddressModel
from Address.serializers import AddressSerializer
from Card.models import CardModel
from Card.serializers import CardSerializer
from Orders.models import OrderModel
from Orders.serializers import OrderSerializer
from Companies.models import CompanyModel
from Companies.serializers import CompanySerializer 

class UserSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)
    address = AddressSerializer(many=True, read_only=True)
    orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = UserModel
        fields = ['id', 'username', 'email', 'date_of_birth', 'password', 'cards', 'address', 'orders']
        extra_kwargs = {'password': {'write_only': True}}

class CustomTokenObtainPairSerializer(serializers.Serializer):
    username_or_email_or_registration = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username_or_email_or_registration = attrs.get('username_or_email_or_registration')
        password = attrs.get('password')

        user = self.authenticate_credentials(username_or_email_or_registration, password)

        if not user:
            raise serializers.ValidationError('No active account found with the given credentials')

        return self.get_tokens_for_user(user)

    def authenticate_credentials(self, username_or_email_or_registration, password):
        user = authenticate(username=username_or_email_or_registration, password=password)

        if user:
            return user

        try:
            company = CompanyModel.objects.get(registration_number=username_or_email_or_registration)
            if password == company.password:
                return company
            else:
                print(f'Senha incorreta para a empresa {company.username}. Senha frontend: {password}, Senha backend: {company.password}')
        except CompanyModel.DoesNotExist:
            print('Empresa não encontrada para registro:', username_or_email_or_registration)

        return None

    def get_tokens_for_user(self, user):
        if isinstance(user, UserModel):
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            user_serializer = UserSerializer(user)
            user_data = user_serializer.data
        elif isinstance(user, CompanyModel):
            access_token = self.generate_access_token_for_company(user)

            company_serializer = CompanySerializer(user)
            user_data = company_serializer.data
        else:
            raise serializers.ValidationError('Unexpected user type encountered during serialization')

        return {
            'refresh': str(refresh),
            'access': access_token,
            'exp': refresh.payload['exp'],
            'user': user_data,
        }
        
    def generate_access_token_for_company(self, company):
        refresh = RefreshToken()
        refresh['username'] = company.username
        refresh['email'] = company.email
        refresh['exp'] = refresh.payload['iat'] + 3600  

        token = str(refresh.access_token)
        return token
