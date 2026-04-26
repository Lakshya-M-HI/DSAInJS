const mediaTree = {
    name: "media",
    children: [
        {
            name: "images",
            children: [
                {
                    name: "events",
                    children: [
                        {
                            name: "birthday",
                            children: [
                                { name: "cake.png", children: [] },
                                { name: "party.jpg", children: [] },
                            ],
                        },
                    ],
                },
                {
                    name: "wallpapers",
                    children: [
                        { name: "nature.jpg", children: [] },
                        { name: "city.png", children: [] },
                    ],
                },
            ],
        },
        {
            name: "music",
            children: [
                {
                    name: "rock",
                    children: [{ name: "song1.mp3", children: [] }],
                },
            ],
        },
        {
            name: "videos",
            children: [],
        },
    ],
};

// function print_all_names(object) {
//     for (const key in object) {

//         if (typeof object[key] === "object" && object[key] !== null) {
//             print_all_names(object[key])
//         } else {
//             console.log(object[key])
//         }
//     }
// }

// print_all_names(mediaTree)


function print_all_names(node, depth = 0) {
    console.log(" ".repeat(depth), node.name)

    for (const child of node.children) {
        print_all_names(child, depth + 1)
    }
}

print_all_names(mediaTree)