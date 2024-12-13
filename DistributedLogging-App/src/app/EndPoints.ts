 export  class  EndPoints{
 private static BaseUrl:string='https://localhost:7289/api/';

 public static LoggedEntriesListEndpoint = (
    Service: string | null,
    Level: string | null,
    From: Date | null,
    To: Date | null,
    page: number , // Default page 1
    pageSize:number // Default page size 5
  ): string => {
    const queryParams: { [key: string]: string } = {};
  
    // Add filter parameters if they exist
    if (Service) {
      queryParams["Service"] = Service;
    }
    if (Level) {
      queryParams["Level"] = Level;
    }
    if (From && !isNaN(From.getTime())) {
      queryParams["From"] = From?.toISOString();
    }
    if (To && !isNaN(To.getTime())) {
      queryParams["To"] = To?.toISOString();
    }
    // Add pagination parameters
    if (Object.keys(queryParams).length === 0) {
        queryParams["page"] = page.toString();
        queryParams["pageSize"] = pageSize.toString();
      }
  
    // Construct query string
    const queryString = Object.keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');
  
    // Return the complete URL
    return `${EndPoints.BaseUrl}LoggedEntries${queryString ? '?' + queryString : ''}`;
  };
  
  public static LoggedEntryByIdEndpoint=(id:number)=>`${EndPoints.BaseUrl}LoggedEntries/GetLoggedEntriesById?Id=${id}`;
  public static LoginEndPoint=`${this.BaseUrl}Identity/login`

}