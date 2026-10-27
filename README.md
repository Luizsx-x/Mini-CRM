# Mini CRM

Cadastro de leads com tags, filtros e busca.

## Como rodar

```bash
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Acesse http://127.0.0.1:8000
