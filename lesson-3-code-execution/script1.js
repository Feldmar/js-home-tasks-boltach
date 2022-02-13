// Задание №2

var image = {
    width: 200,
    height: 300,
    title: "cool image"
};

    for (let key in image) {
        if (typeof image[key] === "number") {
            image[key] = image[key] * 2;
        } 
    }
    console.log(Object.values(image));