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


function folderOrfile_exitsInaTree(node, target) {

    if (node.name === target) return true

    for (const child of node.children) {
        if (folderOrfile_exitsInaTree(child, target) === true) return true
    }

    return false
}

console.log(folderOrfile_exitsInaTree(mediaTree, "videos"))