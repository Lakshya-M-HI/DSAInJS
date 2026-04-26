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


function print_leaf_Nodes(node, max = 0, depth = 1) {

    if (max < depth && !node.children.length) max = depth
    console.log(node.name)

    for (const child of node.children) {
        max = print_leaf_Nodes(child, max, depth + 1)
    }

    return max
}

console.log(print_leaf_Nodes(mediaTree))