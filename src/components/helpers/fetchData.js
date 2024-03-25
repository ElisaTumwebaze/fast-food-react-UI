async function fetchData(endpoint, options = {}) {
    const { method = 'GET', body, headers: customHeaders = {} } = options;
    const token = localStorage.getItem('token');
    const base_URL = `${process.env.REACT_APP_API_URL}`;
  
    const headers = {
      ...customHeaders,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    try {
      const url = new URL(endpoint, base_URL);
      const requestOptions = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      };
  
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! : ${response.error}`);
      }
  
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
  
  export default fetchData;
  