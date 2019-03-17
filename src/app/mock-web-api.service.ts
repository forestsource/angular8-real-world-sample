import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockWebApiService implements InMemoryDbService {
  /** モックデータ : 標準的な Web API の URL と対応させるため、データは配列で定義し、各要素は id プロパティが必須 */
  private api: any = {
    // ユーザ情報とか
    users: [
      { id: 1, name: 'Marty' },
      { id: 2, name: 'Jennifer' }
    ],
    tags: [
      'dragon'
    ],
    articles: []
  };
  /**
   * InMemoryDbService から継承 : モックデータを作成する
   *
   * @return モックデータ
   */
  public createDb(): any {
    return this.api;
  }
}
