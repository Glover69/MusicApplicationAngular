export interface AlbumDetails{
    image : string,
    title : string,
    subdetail1 : string,
    subdetail2 : string,
    subdetail3 : string,
    bio : string
    id : number
}

export interface SliderDetails{
    image : string,
    title : string,
    subdetail1 : string,
    subdetail2 : string,
    subdetail3 : string,
    id : number
}

export interface MusicListDetails{
    order : number,
    name : string,
    timeframe : string,
    id : number
}

export interface CategorySingleObject{
    image : string,
    title : string,
    artist : string,
    id: number,
    albumid: number
}

export interface Top100Category{
    image : string,
    title : string,
    artist : string
}


export interface musicplayer{
    getDetails(): unknown
    title: string,
    image: string,
    song: string
}