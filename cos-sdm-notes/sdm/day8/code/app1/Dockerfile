# select the base image
FROM openjdk

# create and select a working directory
WORKDIR /src

# copy the java file
# copy everything from local current directory to 
# image's current directory (/src)
COPY . .

# note: image may have multiple RUN commands
# execute any command at the time of building the image
# compile the code
RUN javac Person.java

# note: the CMD command must appear only once
# execute the Person.class when the container starts
CMD java Person
