# Atelier Arôme — Laravel 12 API

Production-grade API for Singapore-based artisanal aromatherapy e-commerce platform.

## Technology Stack

- **Framework:** Laravel 12.x
- **PHP:** 8.3+
- **Database:** PostgreSQL 16
- **Cache:** Redis 7.x
- **Search:** Meilisearch 1.x
- **Auth:** Laravel Sanctum 4.x
- **Admin:** Filament 3.x
- **Queue:** Laravel Horizon 5.x

## Local Development Setup

### Prerequisites

- PHP 8.3+
- Composer 2.x
- PostgreSQL 16
- Redis 7.x
- Node.js 20+ (for asset compilation)

### Installation

\`\`\`bash
# Clone repository
git clone <repository-url> atelier-arome-api
cd atelier-arome-api

# Install dependencies
composer install

# Environment setup
cp .env.example .env
php artisan key:generate

# Database setup
createdb atelier_arome_dev
php artisan migrate
php artisan db:seed

# Start development server
php artisan serve
\`\`\`

### Environment Configuration

\`\`\`env
APP_NAME="Atelier Arôme API"
APP_ENV=local
APP_KEY=<generated-by-php-artisan-key:generate>
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=atelier_arome_dev
DB_USERNAME=postgres
DB_PASSWORD=

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_FROM_ADDRESS=noreply@atelierarome.sg
MAIL_FROM_NAME="${APP_NAME}"

# Stripe (test mode - replace with actual test keys)
STRIPE_KEY=pk_test_PLACEHOLDER
STRIPE_SECRET=sk_test_PLACEHOLDER
STRIPE_WEBHOOK_SECRET=whsec_PLACEHOLDER

# Meilisearch
MEILISEARCH_HOST=http://127.0.0.1:7700
MEILISEARCH_KEY=

SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
CACHE_DRIVER=redis
\`\`\`

## API Documentation

API documentation available at: \`http://localhost:8000/api/documentation\`

## Architecture

See \`docs/architecture.md\` for detailed architecture documentation.

## Key Features

- **Headless Commerce:** JSON API for Next.js 15 frontend
- **UUID Primary Keys:** All tables use UUIDs (security + scalability)
- **Soft Deletes:** Preserves data integrity for users, products, orders
- **Alchemical Properties:** Products categorized by humour, rarity, season
- **Singapore Compliance:** GST (9%), PayNow, SingPost, SGD currency
- **Snapshot Pattern:** Order items store purchase-time data (historical integrity)

## Common Commands

### Development
\`\`\`bash
# Start development server
php artisan serve

# Clear cache
php artisan cache:clear

# Clear configuration cache
php artisan config:cache

# Clear route cache
php artisan route:cache

# Clear view cache
php artisan view:cache
\`\`\`

### Database Operations
\`\`\`bash
# Run all migrations
php artisan migrate

# Reset database with seeders
php artisan migrate:fresh --seed

# Create new migration
php artisan make:migration create_table_name

# Rollback last migration
php artisan migrate:rollback

# Run specific seeder
php artisan db:seed --class=ProductSeeder
\`\`\`

### Testing
\`\`\`bash
# Run all tests
php artisan test

# Run specific test suite
php artisan test --testsuite=Feature
php artisan test --testsuite=Unit

# Run single test file
php artisan test tests/Feature/Api/ProductTest.php

# Generate coverage report
php artisan test --coverage
\`\`\`

### Queue Management
\`\`\`bash
# Start queue worker with dashboard
php artisan horizon

# Process queue jobs
php artisan queue:work

# List failed jobs
php artisan queue:failed

# Retry failed job
php artisan queue:retry all

# Clean expired carts (scheduled)
php artisan cart:clean-expired
\`\`\`

### Code Quality
\`\`\`bash
# Static analysis
./vendor/bin/phpstan analyse

# Fix code style
./vendor/bin/pint

# Run rector (refactoring tool)
vendor/bin/rector process
\`\`\`

## Project Structure

\`\`\`
atelier-arome-api/
├── app/                    # Application code
│   ├── Http/
│   │   ├── Controllers/     # API controllers
│   │   ├── Middleware/      # Custom middleware
│   │   ├── Requests/        # Form request validation
│   │   └── Resources/       # API resource transformers
│   ├── Models/             # Eloquent models
│   ├── Services/           # Business logic services
│   └── Exceptions/         # Custom exceptions
├── config/                 # Configuration files
├── database/
│   ├── factories/           # Model factories for testing
│   ├── migrations/          # Database schema migrations
│   └── seeders/             # Database seeders
├── routes/                 # API route definitions
├── tests/                  # Test suites
│   ├── Feature/            # Integration tests
│   └── Unit/               # Unit tests
└── .env.example             # Environment template
\`\`\`

## Database Schema

22 tables total:

**Core Commerce:**
- \`users\` - Customer + admin unified (UUID, soft deletes, role enum)
- \`products\` - Essence products (UUID, alchemical properties, soft deletes)
- \`product_variants\` - Size variants (5ml, 15ml, 30ml)
- \`product_images\` - Multiple product images
- \`categories\` - Product categories
- \`tags\` - Scent note tags
- \`cart_items\` - Shopping cart line items
- \`orders\` - Order records (Singapore GST, order numbering)
- \`order_items\` - Order line items (snapshot pattern)

**User Data:**
- \`addresses\` - Shipping/billing addresses
- \`wishlists\` - User wishlists
- \`wishlist_items\` - Wishlist line items
- \`reviews\` - Product reviews

**Marketing:**
- \`coupons\` - Discount codes
- \`coupon_usages\` - Coupon redemption tracking
- \`testimonials\` - Customer testimonials
- \`newsletter_subscribers\` - Email subscribers

**System:**
- \`inventories\` - Stock tracking
- \`inventory_movements\` - Stock audit log
- \`settings\` - Site configuration (key-value store)

## License

Proprietary - Atelier Arôme © 2026
