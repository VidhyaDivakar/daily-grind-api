#### Reflection Questions

Why was it important to re-format the data from the Useless Facts API before sending it to your own client?

Re-formatting is important because:

1. **Reduces noise** - client only gets what it needs
2. **Improves security** - hides unnecessary metadata (like source URLs)
3. **Improves performance** - smaller response payload
4. If the API changes, your frontend doesn’t break
5. You define what your API looks like, not the external service

#### * Why send a generic error message instead of axios error object?

If you send that directly: It can expose **sensitive backend information, It can confuse the client (too technical),

* It increases security risk (debug info leakage)
* It can expose **sensitive backend information**

#### How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like `?language=de`)?

To modify the application so it returns a fact in a different language, you can use query parameters in your Express route. Instead of hardcoding the language, read it from req.query.language and pass it to the external API using Axios params. For example, if the user calls /api/fun-fact?language=de, your server will extract "de" and send it to the Useless Facts API as { params: { language: "de" } }. If no language is provided, you can default it to English by using "en".
