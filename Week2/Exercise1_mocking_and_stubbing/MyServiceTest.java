package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // 1. Mock the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // 2. Stub the getData method
        when(mockApi.getData()).thenReturn("Mock Data");

        // 3. Use the mocked API in your service
        MyService service = new MyService(mockApi);

        // 4. Fetch data and verify
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
