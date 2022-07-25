from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Clients'
        ordering = ['name']

SCHEDULE_CHOICES=(
    ('MONTHLY','Monthly'),
    ('QUARTERLY','Quarterly'),
    ('SEMI_ANNUALLY','Semi-Annually'),
    ('ANNUALLY','Annually'),
)

STRATEGY_CHOICES=(
    ('AUTOMATICALLy','Automatically'),
    ('MANUALLY','Manually'),
)

class Revenue(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=100)
    service_description = models.TextField()
    billing_amount = models.DecimalField(max_digits=10, decimal_places=2)
    billing_date = models.DateField()
    billing_schedule = models.CharField(max_length=100)
    billing_strategy = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.client.name

    class Meta:
        verbose_name_plural = 'Revenues'
        ordering = ['-created_at']