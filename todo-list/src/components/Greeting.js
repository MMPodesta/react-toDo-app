export const Greeting = (props) =>{
    //capitalize 
    const name = props.name;
    const arr = name.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    return(
        <h2 className="mt-10 text-2xl">Hello, {str2}.</h2>
    ); 
};
