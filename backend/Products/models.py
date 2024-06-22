from django.db import models

class Category(models.TextChoices):
    ELECTRONICS = 'EL', 'Electronics & Technology'
    FASHION = 'FA', 'Fashion & Accessories'
    HOME_KITCHEN = 'HK', 'Home & Kitchen'
    BEAUTY_CARE = 'BC', 'Beauty & Personal Care'
    SPORTS_OUTDOORS = 'SO', 'Sports & Outdoors'
    BABY_KIDS = 'BK', 'Baby & Kids'
    HEALTH_WELLNESS = 'HW', 'Health & Wellness'
    BOOKS_MEDIA = 'BM', 'Books & Media'
    FOOD_BEVERAGES = 'FB', 'Food & Beverages'
    AUTOMOTIVE_TOOLS = 'AT', 'Automotive & Tools'
    PET_SHOP = 'PS', 'Pet Shop'
    OUTDOORS_GARDENING = 'OG', 'Outdoors & Gardening'

class ProductModel(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome do produto")
    description = models.TextField(verbose_name="Descrição do produto", blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço")
    category = models.CharField(
        max_length=2,
        choices=Category.choices,
        default=Category.ELECTRONICS,
        verbose_name="Categoria"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Data de criação")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Data de atualização")
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Produto"
        verbose_name_plural = "Produtos"
        ordering = ['name']

class ProductLineModel(models.Model):
    product = models.ForeignKey(ProductModel, on_delete=models.DO_NOTHING, verbose_name='Produto')
    quantity = models.PositiveIntegerField(verbose_name='Quantidade')

    def __str__(self):
        return f'{self.product} x{self.quantity}'

    class Meta:
        verbose_name = 'Item'
        verbose_name_plural = 'Itens'
