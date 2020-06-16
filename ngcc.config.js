module.exports = {
    packages: {
        '@nativescript/angular': {
            entryPoints: {
                '.': {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/zone.js\//, /tns-core-modules\//, /@nativescript\/core\//],
        },
        'nativescript-datetimepicker': {
            entryPoints: {
                '.': {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-ui-calendar': {
            entryPoints: {
                angular: {
                    override: {
                        main: './calendar-directives.js',
                        typings: './calendar-directives.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-ui-sidedrawer': {
            entryPoints: {
                angular: {
                    override: {
                        main: './side-drawer-directives.js',
                        typings: './side-drawer-directives.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-ui-listview': {
            entryPoints: {
                angular: {
                    override: {
                        main: './listview-directives.js',
                        typings: './listview-directives.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-button': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-textfield': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-cardview': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-bottomnavigationbar': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-activityindicator': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-material-bottomsheet': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
        'nativescript-image': {
            entryPoints: {
                angular: {
                    override: {
                        main: './index.js',
                        typings: './index.d.ts',
                    },
                    ignoreMissingDependencies: true,
                },
            },
            ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
        },
    },
};
