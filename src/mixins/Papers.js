export const Papers = {
    data () {
        return {
            items: [
                {
                    id: 0,
                    imageUrl: require('../assets/portrait.jpg'),
                    title: 'Hi!',
                    listItems: [
                        {
                            id: 0,
                            title: 'Name:',
                            text: 'Lukas Droste'
                        },
                        {
                            id: 1,
                            title: 'geboren in:',
                            text: 'Soest'
                        },
                        {
                            id: 2,
                            title: 'lebe in:',
                            text: 'Köln'
                        },
                        {
                            id: 3,
                            title: 'Grösse:',
                            text: '1.88m'
                        },
                        {
                            id: 4,
                            title: 'Single',
                            text: ''
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Berufliches:',
                    listItems: [
                        {
                            id: 0,
                            title: 'Was genau?',
                            text: 'Frontendentwickler'
                        },
                        {
                            id: 1,
                            title: 'Wie lange?',
                            text: 'Seit 2018'
                        },
                        {
                            id: 2,
                            title: 'Was hast du studiert?',
                            text: 'Medieninformatik an der Uni Köln'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Berufliches:',
                    listItems: [
                        {
                            id: 0,
                            title: 'Wie lange programmierst du schon?',
                            text: 'Seit 2013'
                        },
                        {
                            id: 1,
                            title: 'Welche Sprachen sprichst du?',
                            text: 'JS, C++, C#, PHP'
                        }
                    ]
                }
            ]
        }
    }
};
