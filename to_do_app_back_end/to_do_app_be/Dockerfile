# FROM mcr.microsoft.com/dotnet/sdk:9.0 
# WORKDIR /app_data

# COPY . /app_data/

# RUN dotnet build "/app_data/to_do_app_be.csproj" -c Release -o /app/publish


# WORKDIR /app/publish
# COPY /data.txt .
# ENV ASPNETCORE_URLS=http://+:8080
# EXPOSE 80:8080
# ENTRYPOINT ["dotnet", "to_do_app_be.dll"]

# Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 
WORKDIR /app
RUN  apt update
RUN  apt-get install git
RUN git clone https://github.com/harrybindra/to_do_app.git
WORKDIR /app/to_do_app/to_do_app_back_end/to_do_app_be
RUN dotnet build "to_do_app_be.csproj" -c Release -o /app/publish
WORKDIR /app/publish
RUN touch data.txt
EXPOSE 8080
ENTRYPOINT ["dotnet", "to_do_app_be.dll"]