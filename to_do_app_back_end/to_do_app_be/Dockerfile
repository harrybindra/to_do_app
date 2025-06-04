# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 
WORKDIR /app_data

COPY . /app_data/
RUN dotnet build "/app_data/to_do_app_be.csproj" -c Release -o /app/publish


WORKDIR /app/publish
COPY /data.txt .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "to_do_app_be.dll"]

