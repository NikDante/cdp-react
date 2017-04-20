const users = [
    {
        login: 'test',
        password: 'test'
    },
    {
        login: 'Eugene',
        password: 123456
    },
    {
        login: 'Dmytro',
        password: 654321
    }
];
const courses = [
    {
        id: 1,
        title: 'First course',
        duration: 130,
        createDate: '2017-01-08',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        id: 2,
        title: 'Second course',
        duration: 120,
        createDate: '2013-01-09',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        id: 3,
        title: 'Third course',
        duration: 15,
        createDate: '2015-01-09',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    }
];

const loadInitialData = () => {
    const localUser = localStorage.getItem('users');
    const localCourses = localStorage.getItem('courses');

    if(!localUser) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    if(!localCourses){
        localStorage.setItem('courses', JSON.stringify(courses));
    }
};

export default loadInitialData;