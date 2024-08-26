import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tagSubject = new BehaviorSubject<string>('All');
  tag$ = this.tagSubject.asObservable();

  setTag(tag: string): void {
    this.tagSubject.next(tag);
  }
}
