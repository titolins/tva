apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" \
    > /etc/apt/sources.list.d/mongodb-org-3.2.list

apt-get -qqy update

apt-get -qqy install npm apt-transport-https ca-certificates \
    git make build-essential libssl-dev zlib1g-dev libbz2-dev \
    libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev \
    libncursesw5-dev xz-utils libjpeg-dev mongodb-org ruby


curl https://storage.googleapis.com/golang/go1.8.1.linux-amd64.tar.gz | \
    tar -C /usr/local -xzf

echo "export PATH=$PATH:/usr/local/go/bin" >> /home/vagrant/.profile

# works, but we are now using ssh agent forward
#su vagrant << EOF
#ssh-keygen -t rsa -b 4096 -C "tito@blinx.com.br" -P "" -f ~/.ssh/id_rsa ;
#eval $(ssh-agent /bin/bash <<< ssh-add ~/.ssh/id_rsa)
#EOF

