export function makeGraph(colums, rows){
    let graph = []

    for (let i=0; i<colums; i++){
        graph.push(["  "])
    }

    for (let i=0; i < graph.length; i++){
        for (let x=0; x < rows-1; x++){
            graph[i].push("  ")
        }
    }

    return graph
}

export function expandGraph(graph, newColums, rows){
    for (let i=0; i<newColums; i++){
        graph.unshift(["  "])
    }

    for (let i=0; i < newColums; i++){
        for (let x=0; x < rows-1; x++){
            graph[i].unshift("  ")
        }
    }
    return graph
}

export function plotGraph(graph, cordinate1, cordinate2, colur, maxX){
    let newCordinate1 = maxX - cordinate1

    if (graph[newCordinate1-1][cordinate2-1] == "  "){
        if (newCordinate1==500){
            graph[newCordinate1-1][cordinate2-1] = "🟥"
        }
        else{
            graph[newCordinate1-1][cordinate2-1] = colur
        }
    }
    else{
        graph[newCordinate1-1][cordinate2-1] = "🟧"
    }
}




