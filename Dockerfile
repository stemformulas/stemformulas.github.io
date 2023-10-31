FROM hugomods/hugo:reg-go-git-0.119.0
# https://github.com/jpanther/congo/issues/689

COPY . /src/

EXPOSE 1313

ENTRYPOINT [ "hugo", "server", "--bind=0.0.0.0"] 