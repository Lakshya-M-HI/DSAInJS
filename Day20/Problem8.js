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
                    children: [{
                        name: "song1.mp3",
                        children: []
                    }],
                },
            ],
        },
        {
            name: "videos",
            children: [],
        },
    ],
};


function heightOfTree(node, max = 0, height = 2) {

    if (!node.children.length && height > max) max = height

    for (const child of node.children) {
        height = heightOfTree(child, max, height + 1)
    }

    return height
}

console.log(heightOfTree(mediaTree))