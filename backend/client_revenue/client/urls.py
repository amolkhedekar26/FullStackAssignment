from django.urls import path

from .views import ClientAPIView, ClientDetailAPIView, ExportAPIView, RevenueAPIView

urlpatterns = [
    path('clients/', ClientAPIView.as_view(), name='clients-api'),
    path('clients/<int:pk>/', ClientDetailAPIView.as_view(),
         name='client-detail-api'),
    path('revenues/', RevenueAPIView.as_view(), name='revenues-api'),
    path('revenues/<int:pk>/', RevenueAPIView.as_view(), name='revenue-detail-api'),
    path('export/', ExportAPIView.as_view(), name='export-api'),

]
