print("Dobrodošli v programu\n".center(80) +"ENOSTAVNA KARA")
# v = vrstice/visina
v = int(input("\nVnesi pozitivno število za vrsice v kari:\n"))

# o = oblika/izbira
while True:
    o = int(input("\nIzberite obliko kare: \n1=polna, \n2=Prazna, \n3=zmaj: \n\n"))
    if o!=1 and o!=2 and o!=3:
        print("\nVnesite samo 1-3")
        continue
    break
#s = stolpci/sirina
s = v
i = 0
while i < v/2:
    j = 0
    while j < s :
        if((s//2)-i <=j <=(s//2) +i):
            print("*", end = "")
        else:
            print(" ",end = "")

        j+=1
    print(" ")
    i+=1

i = 0
while i < v/2:
    j = 0
    while j < s:
        if(i < j <s-1 -i):
            print("*", end = "")
        else:
            print(" ",end = "")

        j+=1
    print(" ")
    i+=1