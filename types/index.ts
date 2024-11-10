import { ObjectId } from "mongodb"
import { Url } from "url"

export type Member = {
    _id: ObjectId,
    name: string,
    avatar?: string,
    createdAt: string,
}

export type Tour = {
    _id: ObjectId,
    name: string,
    price: string,
    duration: number,
    startDate: string,
    endDate: string,
    planName: string,
    planDescription: string,
    nightPlan : string,
    image : File
}

export type Visa = {
    _id: ObjectId,
    name: string,
    latin: string,
    startDate: string,
    endDate: string,
    price: string,
    unit: string,
    image : String
}

