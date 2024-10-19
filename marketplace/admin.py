from django.contrib import admin
from .models import Cart
# Register your models here.
class CartAdminClass(admin.ModelAdmin):
    list_display=['user','fooditem','quantity','updated_at']
admin.site.register(Cart,CartAdminClass)