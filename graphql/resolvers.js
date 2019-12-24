const Cobb ={
    name : "YooCobb",
    age : 23,
    gender : "men"
};

const resolvers = {
    Query:{
    person:() => Cobb
    }
};

export default resolvers;