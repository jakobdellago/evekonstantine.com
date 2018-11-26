<?php
return [
    'BE' => [
        'debug' => false,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$pbkdf2-sha256$25000$xdOJmr0a4PE75nKjocTFlA$xYjHNql4YZnH7e44eJAUObP0MJbUc6zv1bTJK/rfW1I',
        'loginSecurityLevel' => 'rsa',
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8',
                'dbname' => 'evekonstantine',
                'driver' => 'mysqli',
                'host' => '127.0.0.1',
                'password' => 'Atigu9Edis11',
                'port' => 3306,
                'user' => 'root',
            ],
        ],
    ],
    'EXT' => [
        'extConf' => [
            'mask' => 'a:9:{s:4:"json";s:19:"typo3conf/mask.json";s:18:"backendlayout_pids";s:3:"0,1";s:7:"content";s:43:"fileadmin/resources/templates/mask/content/";s:7:"layouts";s:51:"fileadmin/resources/templates/mask/content/Layouts/";s:8:"partials";s:52:"fileadmin/resources/templates/mask/content/Partials/";s:7:"backend";s:43:"fileadmin/resources/templates/mask/backend/";s:15:"layouts_backend";s:51:"fileadmin/resources/templates/mask/backend/Layouts/";s:16:"partials_backend";s:52:"fileadmin/resources/templates/mask/backend/Partials/";s:7:"preview";s:43:"fileadmin/resources/templates/mask/preview/";}',
            'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
            'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\Pbkdf2Salt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
        ],
    ],
    'FE' => [
        'debug' => false,
        'loginSecurityLevel' => 'rsa',
    ],
    'GFX' => [
        'jpg_quality' => '80',
        'processor' => 'GraphicsMagick',
        'processor_allowTemporaryMasksAsPng' => false,
        'processor_colorspace' => 'RGB',
        'processor_effects' => -1,
        'processor_enabled' => true,
        'processor_path' => 'C:/Program Files/GraphicsMagick-1.3.29-Q16/',
        'processor_path_lzw' => 'C:/Program Files/GraphicsMagick-1.3.29-Q16/',
    ],
    'MAIL' => [
        'transport' => 'smtp',
        'transport_sendmail_command' => '',
        'transport_smtp_encrypt' => '',
        'transport_smtp_password' => '',
        'transport_smtp_server' => 'localhost:25',
        'transport_smtp_username' => '',
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'extbase_object' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'frontend' => 'TYPO3\\CMS\\Core\\Cache\\Frontend\\VariableFrontend',
                    'groups' => [
                        'system',
                    ],
                    'options' => [
                        'defaultLifetime' => 0,
                    ],
                ],
            ],
        ],
        'devIPmask' => '',
        'displayErrors' => 0,
        'enableDeprecationLog' => false,
        'encryptionKey' => '00e880cd670f9dc808587894bc62a3ac436d870cd69ac5942cb82ba881278cefcf5b2d64796d4c095f0d2d2f38c33a0f',
        'exceptionalErrors' => 20480,
        'isInitialDatabaseImportDone' => true,
        'isInitialInstallationInProgress' => false,
        'sitename' => 'evekonstantine.com',
        'sqlDebug' => 0,
        'systemLogLevel' => 2,
    ],
];
