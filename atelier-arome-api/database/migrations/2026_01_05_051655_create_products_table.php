<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('category_id');
            $table->string('name', 200);
            $table->string('slug', 200)->unique();
            $table->string('latin_name', 200)->nullable();
            $table->text('description');
            $table->text('long_description')->nullable();
            $table->enum('humour', ['calming', 'uplifting', 'grounding', 'clarifying'])->nullable();
            $table->enum('rarity', ['common', 'rare', 'limited'])->default('common');
            $table->enum('season', ['spring', 'summer', 'autumn', 'winter'])->nullable();
            $table->string('extraction_method', 100)->nullable();
            $table->string('folio_number', 20)->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->jsonb('meta_data')->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Foreign key
            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');

            // Indexes
            $table->index('slug');
            $table->index('category_id');
            $table->index(['is_active', 'sort_order']);
            $table->index('is_featured');
            $table->index('humour');
            $table->index('rarity');
            $table->index('deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
