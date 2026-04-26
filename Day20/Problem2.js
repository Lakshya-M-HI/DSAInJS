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


function total_count_of_nodes(node) {
    let count = 1

    for (const child of node.children) {
        count += total_count_of_nodes(child)
    }

    return count
}

console.log(total_count_of_nodes(mediaTree))