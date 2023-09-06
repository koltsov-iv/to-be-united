
export enum FundraisingStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface Fundraising {
  id: number
  dateStart: Date
  dateClose: Date
  goal: number
  status: FundraisingStatus
}
