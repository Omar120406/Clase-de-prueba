# Use a base Ubuntu image
FROM ubuntu:latest

# Avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update package lists and install required packages
RUN apt-get update && apt-get install -y \
    apache2 \
    mysql-server \
    && rm -rf /var/lib/apt/lists/*

# Configure Apache
RUN a2enmod rewrite
RUN service apache2 restart

# Configure MySQL
RUN service mysql start

# Expose ports
EXPOSE 80   # Apache
EXPOSE 3306 # MySQL

# Start Apache and MySQL when container launches
CMD service apache2 start && service mysql start && tail -f /dev/null