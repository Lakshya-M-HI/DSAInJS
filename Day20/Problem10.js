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


function folderOrfile_exitsInaTree(node, target, path = "") {

    if (node.name === target) {
        return path += node.name
    }
    
    for (const child of node.children) {
        
        path = folderOrfile_exitsInaTree(child, target, path)
        if (path.includes(target)) return path = node.name + " -> " + path
    }

    return path
}

console.log(folderOrfile_exitsInaTree(mediaTree, "city.png"))