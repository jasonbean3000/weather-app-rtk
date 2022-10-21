export const degreesToCompass = (degrees) => {
    if(degrees >= 341 && degrees <= 360) {
        return 'North'
    } else if (degrees >= 0 && degrees <= 20) {
        return 'North'
    } else if (degrees >= 21 && degrees <= 70) {
        return 'North East'
    } else if (degrees >= 71 && degrees <= 110) {
        return 'E'
    } else if (degrees >= 111 && degrees <= 160) {
        return 'SE'
    } else if (degrees >= 161 && degrees <= 200) {
        return 'S'
    } else if (degrees >= 201 && degrees <= 250) {
        return 'SW'
    } else if (degrees >= 251 && degrees <= 290) {
        return 'W'
    } else {
        return 'NW'
    }
}


