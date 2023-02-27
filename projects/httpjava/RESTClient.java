import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class RESTClient {

  private final HttpClient client;

  public RESTClient() {
    client = HttpClient.newBuilder()
      .build();
  }

  public void sendGetRequest() {
    try {
      HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
        .header("Content-Type", "application/json")
        .GET()
        .build();
      HttpResponse<String> response 
  = client.send(request, HttpResponse.BodyHandlers.ofString());
      System.out.println("Status: " + response.statusCode());
      System.out.println("Content: " + response.body());
    } catch (Exception e) {
      System.out.println("Error sending GET request: " 
           + e.getMessage());
    }
  }

  public static void main(String[] args) {
    RESTClient restClient = new RESTClient();
    restClient.sendGetRequest();
  }
}