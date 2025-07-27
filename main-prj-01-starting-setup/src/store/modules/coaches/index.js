import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            coaches:
                [
                    {
                        id: 'c1',
                        firstName: 'Maximilian',
                        lastName: 'Schwarzmüller',
                        areas: ['frontend', 'backend', 'career'],
                        description:
                            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                        hourlyRate: 3000
                    },
                    {
                        id: 'c2',
                        firstName: 'Julie',
                        lastName: 'Jones',
                        areas: ['frontend', 'career'],
                        description:
                            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                        hourlyRate: 5000
                    },
                    {
                        id: 'c3',
                        firstName: 'David',
                        lastName: 'Blaine',
                        areas: ['backend', 'career'],
                        description:
                            'Wanna see a magic trick?',
                        hourlyRate: 70000
                    }
                ]


        };
    },
    mutations,
    actions,
    getters
}