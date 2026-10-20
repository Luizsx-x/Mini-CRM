<?php

namespace Database\Seeders;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = ['Quente', 'Frio', 'WhatsApp', 'Site', 'Google Ads', 'Facebook'];

        foreach ($tags as $nome) {
            Tag::firstOrCreate(['nome' => $nome]);
        }
    }
}
