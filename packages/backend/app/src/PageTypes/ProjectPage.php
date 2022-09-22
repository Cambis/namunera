<?php

namespace App\PageTypes;

use Page;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;

class ProjectPage extends Page
{
    private static $table_name = 'ProjectPage';

    private static array $has_one = [
        'HeroImage' => Image::class,
    ];

    private static array $owns = [
        'HeroImage',
    ];

    public function getCMSFields(): FieldList
    {
        $fields = parent::getCMSFields();

        $fields->addFieldToTab(
            'Root.Main',
            UploadField::create('HeroImage', 'Hero Image'),
            'Content'
        );

        return $fields;
    }
}