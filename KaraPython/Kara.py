print("Dobrodošli v programu\n".center(80) +"ENOSTAVNA KARA")
# v = vrstice/visina
v = int(input("\n Vnesi pozitivno število za vrsice v kari:\n"))
#s = stolpci/sirina
s = v-1
i = 0
while i < v//2:
    j = 0
    while j < s :
        if((s//2)-i <=j <=(s/2) +i):
            print("*", end = "")
        else:
            print(" ",end = "")

        j+=1
    print(" ")
    i+=1

i = 0
while i < v:
    j = 0
    while j < s :
        if(i < j <s-1 -i):
            print("*", end = "")
        else:
            print(" ",end = "")

        j+=1
    print(" ")
    i+=1