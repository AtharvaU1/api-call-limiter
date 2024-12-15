# To run the project:

a. npm install

b. npm start

# Approach

1. I have created an endpoint which acts as a wrapper over the call_me function.

2. I have initialized a counter which keeps track of the number of times the call_me function has been called.

3. Whenever you call the endpoint localhost:3000/users/{id}, before calling the call_me function, I check this counter to make sure we haven't exceeded the limit.

4. If we haven't exceeded the limit, we can call the function and increment the count.

5. Otherwise, there are two options, either return the result from the cache OR defer the calling of the function to the next minute when the count has been reset.

In this way, we can prevent being penalized from calling the function.
