<?php

namespace App\Extensions;

use gorriecoe\Link\Models\Link;
use gorriecoe\LinkField\LinkField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataExtension;
use SilverStripe\SiteConfig\SiteConfig;

/**
 * @property SiteConfig|$this $owner
 * @property string $LinkedInLinkID
 * @method Link LinkedInLink()
 */
class FooterSiteConfigExtension extends DataExtension
{

    private static array $has_one = [
        'LinkedInLink' => Link::class,
    ];

    private static array $cares = [
        'LinkedInLink',
    ];

    private static array $owns = [
        'LinkedInLink',
    ];

    private static array $cascade_deletes = [
        'LinkedInLink',
    ];

    private static array $cascade_duplicates = [
        'LinkedInLink',
    ];

    public function updateCMSFields(FieldList $fields): void
    {
        $fields->removeByName([
            'Copyright',
        ]);

        $fields->addFieldsToTab(
            'Root.Footer',
            [
                HeaderField::create('Footer', 'Footer', 3),
                LinkField::create('LinkedInLink', 'LinkedIn Link', $this->owner),
            ]
        );
    }

    public function canView() {
        return true;
    }
}
