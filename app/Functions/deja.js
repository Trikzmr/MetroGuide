import {stations, mapp} from "./Lists";


const patth = [];
export const solvee = (src, dest) => {
    const n = stations.length;
    const distances = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    const previous = Array(n).fill(null);

    // Convert station names to indices
    const startIndex = stations.indexOf(src);
    const endIndex = stations.indexOf(dest);

    distances[startIndex] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && (u === -1 || distances[j] < distances[u])) {
                u = j;
            }
        }

        if (u === -1 || distances[u] === Infinity) break; // All reachable nodes have been visited
        visited[u] = true;

        for (let v = 0; v < n; v++) {
            if (mapp[u][v] && !visited[v]) {
                const alt = distances[u] + mapp[u][v];
                if (alt < distances[v]) {
                    distances[v] = alt;
                    previous[v] = u;
                }
            }
        }
    }

    // Backtrack to find the path
    let u = endIndex;
    let path = [];
    while (u !== null) {
        path.push(stations[u]);
        u = previous[u];
    }

    // Reverse to get the path from source to destination
    path.reverse();

    // Fill the patth array
    patth.length = 0; // Clear the array
    for (let station of path) {
        patth.push(station);
    }

    return patth;
}