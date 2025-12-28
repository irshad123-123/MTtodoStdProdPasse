export interface Ipass{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: Ichild[] | null

}
export interface Ichild{
    name : string;
    age : number
}