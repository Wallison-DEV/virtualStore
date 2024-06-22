from rest_framework import viewsets

from .models import ProductModel, ProductLineModel
from .serializers import ProductSerializer, ProductLineSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    
class ProductLineViewSet(viewsets.ModelViewSet):
    queryset = ProductLineModel.objects.all()
    serializer_class = ProductLineSerializer
    