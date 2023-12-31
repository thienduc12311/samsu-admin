import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Department, GetAllUsersListResponse } from '../user/user.service';
import { Semester } from '../semester/semester.service';
import { GradeSubCriteria } from '../grade-sub-criteria/grade-sub-criteria.service';
import { GradeSubCriteriaResponse } from '../grade/grade.service';
export interface Event {
  id?: number;
  semestersName: string;
  title: string;
  content?: string;
  status: number;
  createAt?: Date;
  startTime: Date;
  duration: number;
  bannerUrl: string;
  fileUrls?: string;
  participants?: GetAllUsersListResponse[];
  attendScore?: number;
  creator?: GetAllUsersListResponse;
  eventLeader?: GetAllUsersListResponse;
  departments?: Department[];
  semester?: Semester;
  eventProposalId?: number;
  feedbackQuestions: FeedbackQuestion[],
  tasks: Task[];
  gradeSubCriteriaResponse?: GradeSubCriteriaResponse;
  processStatus: number;
}

export interface FeedbackQuestion extends FeedbackQuestionRequest {
  createdAt: Date,
  id: number,
}

export interface FeedbackQuestionRequest {
  type: number;
  question: string;
  answer: string;
}

export interface AssigneeRequest {
  status: number;
  rollnumber: string;
}

export interface Task {
  id: number;
  creator: GetAllUsersListResponse; 
  title: string;
  content: string;
  status: number;
  score: number;
  eventId: number;
  gradeSubCriteria: GradeSubCriteria;
  assignees: AssigneeRequest[];
  deadline: Date;
}

export interface TaskRequests {
  title: string;
  content: string;
  status: number;
  score: number;
  gradeSubCriteriaId: number;
  assignees: AssigneeRequest[];
  deadline: Date;
}

export interface CreateEventRequest {
  status: number;
  duration: number;
  attendScore: number;
  title: string;
  content: string;
  eventProposalId: number;
  eventLeaderRollnumber: string;
  semester: string;
  bannerUrl: string;
  fileUrls: string;
  startTime: Date;
  feedbackQuestionRequestList: FeedbackQuestionRequest[];
  departmentIds?: string[];
  rollnumbers: string[];
  taskRequests?: TaskRequests[];
  subGradeCriteriaId: number;
  processStatus: number;
}

export interface EventParticipant {
  eventId: number;
  user: GetAllUsersListResponse;
  checkin: Date | number //conver lai thanh Date;
  checkout: Date | number;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiEndPoint: string = "";
  constructor(
    private http: HttpClient,
    protected router: Router,
  ) {
    this.apiEndPoint = environment.apiEndPoint;
  }
  public createEvent(event: CreateEventRequest) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const options = { headers: headers };
    return this.http
      .post(`${this.apiEndPoint}/events`, JSON.stringify(event), options)
      .pipe(
        catchError((error) => {
          console.error("Error in createEvent:", error);
          return throwError(error);
        })
      );
  }

  public getAllEvents() {
    return this.http.get(`${this.apiEndPoint}/events`).pipe(
      catchError((error) => {
        console.error("Error in getAllEvents:", error);
        return throwError(error);
      })
    );
  }

  public getEvent(id: number) {
    return this.http.get(`${this.apiEndPoint}/events/${id}`).pipe(
      catchError((error) => {
        console.error("Error in getEvent:", error);
        return throwError(error);
      })
    );
  }

  public updateEvent(event: CreateEventRequest, id: string) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const options = { headers: headers };
    return this.http
      .put(`${this.apiEndPoint}/events/${id}`, JSON.stringify(event), options)
      .pipe(
        catchError((error) => {
          console.error("Error in updateEvent:", error);
          return throwError(error);
        })
      );
  }

  public getEventParticipants(id: number) {
    return this.http.get(`${this.apiEndPoint}/events/${id}/participants`).pipe(
      catchError((error) => {
        console.error("Error in getEventParticipants:", error);
        return throwError(error);
      })
    );
  }

  public checkInUser(eventid: number, rollnumber: string) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const options = { headers: headers };
    return this.http
      .post(`${this.apiEndPoint}/events/event/${eventid}/checkin/${rollnumber}`, JSON.stringify(event), options)
      .pipe(
        catchError((error) => {
          console.error("Error in checkInUser:", error);
          return throwError(error);
        })
      );
  }

  public getPostsByEventId(eventId: number) {
    return this.http.get(`${this.apiEndPoint}/events/${eventId}/posts`).pipe(
      catchError((error) => {
        console.error("Error in getPostsByEventId:", error);
        return throwError(error);
      })
    );
  }

  public updateEventStatus(eventId: number, status: number) {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
    const options = { headers: headers };
    return this.http
      .put(`${this.apiEndPoint}/events/${eventId}/processStatus/${status}`, {}, options)
      .pipe(
        catchError((error) => {
          console.error("Error in checkInUser:", error);
          return throwError(error);
        })
      );
  }
  
}
