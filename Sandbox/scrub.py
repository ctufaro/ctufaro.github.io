import sys

filename = sys.argv[1]

# open file
with open(filename, 'r') as file :
    filedata = file.read()

# Replace the target string
filedata = filedata.replace('href="/', 'href="')
filedata = filedata.replace('src="/', 'src="')

# Write the file out again
with open(filename, 'w') as file:
    file.write(filedata)