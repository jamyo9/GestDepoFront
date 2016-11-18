import { Exercise } from './exercise.object'

export class Season {

    public seasonId?: number;
    public name: string;

    public startDate: Date;
	public endDate: Date;

    public planning: Map<Date, Exercise[]>;
    
}