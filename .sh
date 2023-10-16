echo '------ nest gen script ------'
for var in "$@"
do
    nest g module  $var
    nest g service  $var
    nest g controller  $var
    echo "gen $var"
done
