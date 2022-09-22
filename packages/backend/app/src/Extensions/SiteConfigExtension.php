<?php

namespace App\Extensions;

use Sheadawson\Linkable\Forms\LinkField;
use Sheadawson\Linkable\Models\Link;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataExtension;

class SiteConfigExtension extends DataExtension
{
    /**
     * @var array
     */
    private static $db = [
        'HeroTitle' => 'Text',
        'HeroContent' => 'Text',
    ];

    /**
     * @param FieldList $fields
     * @return void
     */
    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab(
            'Root.Hero',
            [
                TextField::create(
                    'HeroTitle',
                    'Hero Title'
                )->setDescription('Text that appears on the hero title'),
                TextareaField::create(
                    'HeroContent',
                    'Hero Content'
                )->setDescription('Content that appears under the hero title'),
            ]
        );
    }

    public function canView() {
        return true;
    }
}
